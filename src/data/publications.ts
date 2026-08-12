export interface Publication {
  id: string;
  tag: string;
  year: number;
  journal: string;
  title: string;
  authors: string;
  abstract: string;
  url: string;
  doi?: string;
}

export const publications: Publication[] = [
  {
    id: "sleeve-adolescents-vs-young-adults-2026",
    tag: "Obesity Pillars · 2026",
    year: 2026,
    journal: "Obesity Pillars",
    title:
      "One-year weight loss and metabolic outcomes after laparoscopic sleeve gastrectomy in adolescents compared with young adults: a propensity score-matched cohort study",
    authors:
      "Taki-Eldin A, Lotfy A, El-Soudani MSM, Ghaly M, Eltaweel MMM, Ghalwash ET, Elalfy TR, Kandel AM, Abdel Sadek ZM, Ahmed AN.",
    abstract:
      "Propensity score-matched TriNetX cohort study (318 matched pairs) showing adolescents (13–17 y) achieve equivalent 1-year BMI and metabolic outcomes after laparoscopic sleeve gastrectomy compared with young adults (18–21 y). Pre-surgical GLP-1 receptor agonist exposure was substantially higher in adolescents, and ~49% of patients had pre-existing vitamin D insufficiency.",
    url: "https://doi.org/10.1016/j.obpill.2026.100315",
    doi: "10.1016/j.obpill.2026.100315",
  },
  {
    id: "lvmr-vs-perineal-stapler-2024",
    tag: "Tech Coloproctol · 2024",
    year: 2024,
    journal: "Techniques in Coloproctology",
    title:
      "Laparoscopic ventral mesh rectopexy vs perineal stapler resection for external full-thickness rectal prolapse in elderly patients",
    authors:
      "Habeeb TAAM, Podda M, Chiaretti M, Kechagias A, Lledó JB, … Rushdy T, et al.",
    abstract:
      "Retrospective cohort study comparing laparoscopic ventral mesh rectopexy with perineal stapler resection in elderly patients with external full-thickness rectal prolapse; enhanced outcomes and reduced recurrence rates favored the laparoscopic approach.",
    url: "https://doi.org/10.1007/s10151-024-02919-1",
    doi: "10.1007/s10151-024-02919-1",
  },
  {
    id: "endomanometric-nissen-2023",
    tag: "Int J Surg · 2023",
    year: 2023,
    journal: "International Journal of Surgery",
    title:
      "Intraoperative endomanometric laparoscopic Nissen fundoplication in large sliding hiatus hernia with severe GERD",
    authors:
      "Habeeb TAAM, Hussain A, Podda M, Aiolfi A, Kryvoruchko IA, … Rushdy T, et al.",
    abstract:
      "Retrospective cohort study on intraoperative endomanometric guidance during laparoscopic Nissen fundoplication for large sliding hiatus hernia with severe GERD, demonstrating improved postoperative outcomes.",
    url: "https://doi.org/10.1097/js9.0000000000000659",
    doi: "10.1097/js9.0000000000000659",
  },
  {
    id: "lap-port-access-2023",
    tag: "IOSR J Dent Med Sci · 2023",
    year: 2023,
    journal: "IOSR Journal of Dental and Medical Sciences",
    title: "Laparoscopic port access techniques and port site complications",
    authors: "Shah AB, Tamer, Ala, Rizwan, Wael, Abdullah, Hatim.",
    abstract:
      "Review of laparoscopic port access techniques and the recognition, prevention, and management of port-site complications.",
    url: "https://doi.org/10.9790/0853-2212066369",
    doi: "10.9790/0853-2212066369",
  },
  {
    id: "three-vs-five-ports-sleeve-2021",
    tag: "Zagazig Univ Med J · 2021",
    year: 2021,
    journal: "Zagazig University Medical Journal",
    title:
      "Three ports vs conventional five ports laparoscopic sleeve gastrectomy for morbid obesity",
    authors: "Algazar ME, Abdullah WM, Elalfy TR.",
    abstract:
      "Retrospective comparison of three-port vs conventional five-port laparoscopic sleeve gastrectomy for morbid obesity, reporting operative and short-term outcomes.",
    url: "https://zumj.journals.ekb.eg/",
  },
  {
    id: "subcutaneous-sinusectomy-pilonidal-2021",
    tag: "Zagazig Univ Med J · 2021",
    year: 2021,
    journal: "Zagazig University Medical Journal",
    title:
      "Subcutaneous sinusectomy and cystectomy in management of complex pilonidal sinus disease",
    authors: "Algazar ME, Alshazly MN, Elalfy TR.",
    abstract:
      "Tissue-sparing subcutaneous sinusectomy and cystectomy approach for complex pilonidal sinus disease with reduced morbidity compared with wide excision.",
    url: "https://zumj.journals.ekb.eg/",
  },
  {
    id: "non-appendicitis-lap-appendectomy-2021",
    tag: "World J Lap Surg · 2021",
    year: 2021,
    journal: "World Journal of Laparoscopic Surgery",
    title:
      "Do we still encounter non-appendicitis pathologies during laparoscopic appendectomy?",
    authors: "Orban YA, Algazar ME, Farag AA, Elalfy TR.",
    abstract:
      "Prospective series describing non-appendicitis pathologies identified during laparoscopic appendectomy and their intraoperative management. 14(1), 10–14.",
    url: "https://doi.org/10.5005/jp-journals-10033-1432",
    doi: "10.5005/jp-journals-10033-1432",
  },
  {
    id: "altemeier-stomal-prolapse-2021",
    tag: "J Coloproctol · 2021",
    year: 2021,
    journal: "Journal of Coloproctology",
    title:
      "Surgery for complicated stomal prolapse: Is the Altemeier technique an option?",
    authors: "Alalfy TR, Orban YA, Algazar ME, Farag AA.",
    abstract:
      "Report of three cases applying a modified Altemeier perineal rectosigmoidectomy technique for complicated stomal prolapse. 41(1), 37–41.",
    url: "https://www.scielo.br/j/jcol/",
  },
  {
    id: "cyanoacrylate-vs-suture-lichtenstein-2019",
    tag: "Egypt J Surg · 2019",
    year: 2019,
    journal: "Egyptian Journal of Surgery",
    title:
      "Cyanoacrylate glue mesh fixation vs suture mesh fixation in Lichtenstein inguinal hernia repair",
    authors: "Arafa AS, Khairy MM, Elalfy TR, Gomaa MS.",
    abstract:
      "Comparative study of cyanoacrylate glue vs suture mesh fixation in Lichtenstein inguinal hernia repair, reporting chronic pain, recurrence and operative outcomes. 38, 471–477.",
    url: "https://journals.lww.com/ejos/",
  },
  {
    id: "splenectomy-embolisation-2018",
    tag: "Eur Radiol Exp · 2018",
    year: 2018,
    journal: "European Radiology Experimental",
    title:
      "Splenectomy for hypersplenism with or without preoperative splenic artery embolisation",
    authors: "Zaitoun MMA, Basha MAA, Raafat A, Rushdy T, Mawla WA.",
    abstract:
      "Study on the impact of preoperative splenic artery embolisation on intraoperative blood loss and outcomes in splenectomy for hypersplenism. 2:23.",
    url: "https://doi.org/10.1186/s41747-018-0053-6",
    doi: "10.1186/s41747-018-0053-6",
  },
  {
    id: "sleeve-vs-plication-2018",
    tag: "Life Sci J · 2018",
    year: 2018,
    journal: "Life Science Journal",
    title:
      "Short-term outcome of laparoscopic sleeve gastrectomy vs laparoscopic gastric plication in morbidly obese patients",
    authors: "Ibrahim IM, Metwalli AM, Elalfy TR.",
    abstract:
      "Short-term outcome comparison of laparoscopic sleeve gastrectomy vs laparoscopic gastric plication in morbidly obese patients, evaluating weight loss and complications. 15(4).",
    url: "http://www.lifesciencesite.com/",
  },
  {
    id: "skin-sparing-fistulectomy-2016",
    tag: "J Surg Surg Res · 2016",
    year: 2016,
    journal: "Journal of Surgery and Surgical Research",
    title:
      "Skin-sparing fistulectomy with primary sphincter repair for high perianal fistula",
    authors:
      "Lasheen AE, Mahmoud R, Elaziz OA, Alkilany M, Alnaimy T, Rushdy T.",
    abstract:
      "Skin-sparing fistulectomy with primary sphincter repair as a continence-preserving approach for high perianal fistula.",
    url: "https://www.peertechzpublications.com/journals/journal-of-surgery-and-surgical-research",
  },
];
