import re

with open('src/lib/top-richers.ts', 'r', encoding='utf-8') as f:
    content = f.read()

lines = content.split('\n')
new_lines = []
added = 0

manual_slugs = {
    "Bernard Arnault & family": "bernard-arnault",
    "Jensen Huang": "jensen-huang", 
    "Elon Musk": "elon-musk",
    "Larry Page": "larry-page",
    "Sergey Brin": "sergey-brin",
    "Jeff Bezos": "jeff-bezos",
    "Mark Zuckerberg": "mark-zuckerberg",
    "Larry Ellison": "larry-ellison",
    "Warren Buffett": "warren-buffett",
    "Changpeng Zhao": "changpeng-zhao",
    "Michael Bloomberg": "michael-bloomberg",
    "Bill Gates": "bill-gates",
    "Jack Ma": "jack-ma",
    "Masayoshi Son": "masayoshi-son",
    "Lei Jun": "lei-jun",
    "Pham Nhat Vuong": "pham-nhat-vuong",
    "Jay Y. Lee": "jay-y-lee",
}

for i, line in enumerate(lines):
    new_lines.append(line)
    s = line.strip()
    
    if s.startswith('category:') and s.endswith(','):
        for j in range(i-1, max(i-8, -1), -1):
            prev = lines[j].strip()
            if prev.startswith('profileSlug:'):
                break
            if prev.startswith('name:'):
                name_match = re.match(r'name:\s*"([^"]+)"', prev)
                if not name_match:
                    name_match = re.match(r"name:\s*'([^']+)'", prev)
                if name_match:
                    name = name_match.group(1)
                    if name in manual_slugs:
                        slug = manual_slugs[name]
                    else:
                        slug = name.lower()
                        replacements = {'ñ':'n','á':'a','é':'e','í':'i','ó':'o','ú':'u','ü':'u','ğ':'g','ş':'s','ı':'i','ç':'c','ö':'o','ü':'u'}
                        for old, new in replacements.items():
                            slug = slug.replace(old, new)
                        slug = slug.replace(' & family', '')
                        slug = slug.replace('& family', '')
                        slug = slug.replace(' &', '')
                        slug = re.sub(r'[^a-z0-9]+', '-', slug).strip('-')
                    
                    indent = re.match(r'^(\s+)', line)
                    pad = indent.group(1) if indent else '    '
                    new_lines.append(f'{pad}profileSlug: "{slug}",')
                    added += 1
                break

result = '\n'.join(new_lines)
with open('src/lib/top-richers.ts', 'w', encoding='utf-8') as f:
    f.write(result)
print(f'✅ Added {added} profileSlug entries')
