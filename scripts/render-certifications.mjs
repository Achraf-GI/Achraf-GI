import {readFileSync,writeFileSync} from 'node:fs';
const root=new URL('../',import.meta.url);
const records=JSON.parse(readFileSync(new URL('data/certifications.json',root),'utf8'));
const normalize=s=>s.toLowerCase().replace(/[^a-z0-9]/g,'');
const components=new Set(records.filter(c=>c.completed&&c.type!=='standalone').flatMap(c=>c.componentCourses.map(x=>normalize(x.title))));
const visible=records.filter(c=>!components.has(normalize(c.title)));
const categories=['Lean Six Sigma & Quality','Supply Chain & Operations','SAP & Enterprise Systems','Industry 4.0 & Digital Manufacturing','Machine Learning & Industrial Data','Industrial Safety & HSE','Electrical & Industrial Systems'];
const escape=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
let text='# Certifications\n\n[← Profile](README.md)\n\nIndustrial engineering credentials first; machine learning supports industrial analysis and decision support. Component courses are preserved in the data and do not generate duplicate cards.\n\nOriginal certificate images, completion dates and verification links have not yet been supplied. Labeled placeholders are shown instead of invented credentials.\n';
for(const category of categories){
 const items=visible.filter(c=>c.category===category);
 if(!items.length)continue;
 text+='\n## '+category+'\n';
 for(const c of items.filter(c=>c.featured).sort((a,b)=>a.priority-b.priority)){
  text+=`\n### ${c.title}\n\n<img src="${escape(c.image||'assets/credential-pending.svg')}" alt="${escape(c.image?c.title+' certificate':'Certificate image not supplied — '+c.title)}" width="280" />\n\n`;
  text+=`**Issuer:** ${c.issuer||'To confirm from the certificate'}  \n**Completion date:** ${c.date||'To provide'}  \n`;
  text+=c.credentialUrl?`[View credential](${c.credentialUrl})`:'View credential: link to provide';
  if(c.linkedinUrl)text+=` · [Add to LinkedIn](${c.linkedinUrl})`;
  text+='\n\n'+c.skills.join(' · ')+'\n';
 }
 const standalone=items.filter(c=>!c.featured);
 if(standalone.length){text+='\n<details>\n<summary>Additional standalone credentials</summary>\n\n';for(const c of standalone)text+=`- ${c.credentialUrl?'['+c.title+']('+c.credentialUrl+')':c.title}\n`;text+='\n</details>\n'}
}
writeFileSync(new URL('CERTIFICATIONS.md',root),text);
console.log(`Rendered ${visible.filter(c=>c.featured).length} parent credentials; ${visible.filter(c=>!c.featured).length} standalone entries; component courses hidden.`);
