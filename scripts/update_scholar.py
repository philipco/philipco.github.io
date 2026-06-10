import json
from scholarly import scholarly

SCHOLAR_ID = "RIBv3lgAAAAJ"

author = scholarly.search_author_id(SCHOLAR_ID)
author = scholarly.fill(author, sections=["basics", "indices", "publications"])

papers = []

for pub in author.get("publications", []):
    bib = pub.get("bib", {})
    papers.append({
        "title": bib.get("title"),
        "citations": pub.get("num_citations", 0),
        "year": bib.get("pub_year"),
    })

data = {
    "citations": author.get("citedby"),
    "hIndex": author.get("hindex"),
    "i10Index": author.get("i10index"),
    "papers": papers,
}

with open("public/scholar.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
