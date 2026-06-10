export type ScholarPaper = {
  title: string;
  citations: number | null;
  year?: string | null;
};

function normalizeTitle(title: string) {
  return title
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function citationForPublication(
  publicationTitle: string,
  scholarPapers: ScholarPaper[],
) {
  const target = normalizeTitle(publicationTitle);

  const exact = scholarPapers.find(
    (paper) => normalizeTitle(paper.title) === target,
  );

  if (exact) return exact.citations;

  const fuzzy = scholarPapers.find((paper) => {
    const paperTitle = normalizeTitle(paper.title);
    return paperTitle.includes(target) || target.includes(paperTitle);
  });

  return fuzzy?.citations ?? null;
}
