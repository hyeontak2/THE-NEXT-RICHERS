import json, os

def escape_ts(s):
    """Escape a string for TypeScript source"""
    return s.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')

with open('src/lib/richers-data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the closing ]; of richerProfiles array  
idx = content.find('];\n\nexport const appMetrics')
print("Found array close at position", idx)

# Read all batch JSON files
all_profiles = []
for fname in ['scripts/batch11-40.json', 'scripts/batch31-40.json', 'scripts/batch41-70.json', 'scripts/batch71-100.json']:
    if os.path.exists(fname):
        with open(fname, 'r', encoding='utf-8') as f:
            profiles = json.load(f)
        
        # Get existing slugs
        existing_slugs = set()
        for line in content[:idx].split('\n'):
            line_s = line.strip()
            if line_s.startswith('slug:'):
                s = line_s.split(':')[1].strip().strip('"').strip("'").rstrip(',')
                existing_slugs.add(s)
        
        new_count = 0
        for p in profiles:
            if p['slug'] not in existing_slugs:
                all_profiles.append(p)
                new_count += 1
        print(f"{fname}: {len(profiles)} profiles, {new_count} new")
    else:
        print(f"{fname}: NOT FOUND")

print(f"\nTotal new profiles to add: {len(all_profiles)}")

# Generate TypeScript for each profile
def build_profile(p, pad):
    """Build TypeScript object string for a profile"""
    lines = []
    lines.append(pad + "{")
    lines.append(pad + '  slug: "' + escape_ts(p["slug"]) + '",')
    lines.append(pad + '  name: "' + escape_ts(p["name"]) + '",')
    lines.append(pad + '  koreanName: "' + escape_ts(p["koreanName"]) + '",')
    lines.append(pad + '  headline: "' + escape_ts(p["headline"]) + '",')
    lines.append(pad + '  sector: "' + escape_ts(p["sector"]) + '",')
    lines.append(pad + '  region: "' + escape_ts(p["region"]) + '",')
    lines.append(pad + '  generation: "' + escape_ts(p.get("generation", "")) + '",')
    lines.append(pad + '  rankLabel: "' + escape_ts(p.get("rankLabel", "Top wealth cohort")) + '",')
    lines.append(pad + '  wealthModel: "' + escape_ts(p["wealthModel"]) + '",')
    
    # portrait
    port = p["portrait"]
    lines.append(pad + '  portrait: {')
    lines.append(pad + '    src: "' + escape_ts(port["src"]) + '",')
    lines.append(pad + '    alt: "' + escape_ts(port.get("alt", "")) + '",')
    lines.append(pad + '    credit: "' + escape_ts(port.get("credit", "Wikimedia Commons")) + '",')
    lines.append(pad + '  },')
    
    # summary
    lines.append(pad + '  summary:')
    lines.append(pad + '    "' + escape_ts(p["summary"]) + '",')
    
    # coreInsight
    lines.append(pad + '  coreInsight:')
    lines.append(pad + '    "' + escape_ts(p["coreInsight"]) + '",')
    
    # signalTags
    tags = p.get("signalTags", [])
    tag_str = ", ".join('"' + escape_ts(t) + '"' for t in tags)
    lines.append(pad + '  signalTags: [' + tag_str + '],')
    
    # milestones
    lines.append(pad + '  milestones: [')
    for m in p.get("milestones", []):
        lines.append(pad + '    {')
        lines.append(pad + '      year: "' + escape_ts(m["year"]) + '",')
        lines.append(pad + '      title: "' + escape_ts(m["title"]) + '",')
        lines.append(pad + '      body: "' + escape_ts(m["body"]) + '",')
        lines.append(pad + '      type: "' + escape_ts(m["type"]) + '",')
        lines.append(pad + '    },')
    lines.append(pad + '  ],')
    
    # strategy
    lines.append(pad + '  strategy: [')
    for s in p.get("strategy", []):
        lines.append(pad + '    {')
        lines.append(pad + '      label: "' + escape_ts(s["label"]) + '",')
        lines.append(pad + '      detail: "' + escape_ts(s["detail"]) + '",')
        lines.append(pad + '      weight: ' + str(s["weight"]) + ',')
        lines.append(pad + '    },')
    lines.append(pad + '  ],')
    
    # assetDrivers
    lines.append(pad + '  assetDrivers: [')
    for a in p.get("assetDrivers", []):
        lines.append(pad + '    {')
        lines.append(pad + '      label: "' + escape_ts(a["label"]) + '",')
        lines.append(pad + '      detail: "' + escape_ts(a["detail"]) + '",')
        lines.append(pad + '      source: "' + escape_ts(a["source"]) + '",')
        lines.append(pad + '    },')
    lines.append(pad + '  ],')
    
    # sources
    lines.append(pad + '  sources: [')
    for s in p.get("sources", []):
        lines.append(pad + '    {')
        lines.append(pad + '      name: "' + escape_ts(s["name"]) + '",')
        lines.append(pad + '      grade: "' + escape_ts(s["grade"]) + '",')
        lines.append(pad + '      usage: "' + escape_ts(s["usage"]) + '",')
        lines.append(pad + '      reliability: "' + escape_ts(s["reliability"]) + '",')
        lines.append(pad + '    },')
    lines.append(pad + '  ],')
    
    lines.append(pad + '},')
    return '\n'.join(lines)

before = content[:idx]
after = content[idx:]

new_ts_parts = [build_profile(p, '  ') for p in all_profiles]
new_ts = '\n'.join(new_ts_parts)

result = before + '\n' + new_ts + '\n' + after

with open('src/lib/richers-data.ts', 'w', encoding='utf-8') as f:
    f.write(result)

print(f"Done! Merged {len(all_profiles)} profiles")
