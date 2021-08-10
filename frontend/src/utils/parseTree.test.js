import { parseTree } from "./parseTree";

const subjects = [
  {
    id: 2,
    name_eng: "Natural environment",
    name_ar: "بيئة طبيعية",
    name_de: "Natürlichen Umgebung",
    name_fr: "Environnement naturel",
    description: "",
    depth: 1,
    path: "0001",
    numchild: 0,
  },
  {
    id: 1,
    name_eng: "Religion",
    name_ar: "دين",
    name_de: "Religion",
    name_fr: "Religion",
    description: "",
    depth: 1,
    path: "0002",
    numchild: 1,
  },
  {
    id: 3,
    name_eng: "Mythology",
    name_ar: "Mythology",
    name_de: "Mythology",
    name_fr: "Mythology",
    description: "",
    depth: 2,
    path: "00020002",
    numchild: 0,
  },
];

const parsedSubjects = {
  id: 0,
  name_eng: "Subject Areas",
  children: [
    {
      id: 2,
      name_eng: "Natural environment",
      name_ar: "بيئة طبيعية",
      name_de: "Natürlichen Umgebung",
      name_fr: "Environnement naturel",
      description: "",
      depth: 1,
      path: "0001",
      numchild: 0,
      children: [],
    },
    {
      id: 1,
      name_eng: "Religion",
      name_ar: "دين",
      name_de: "Religion",
      name_fr: "Religion",
      description: "",
      depth: 1,
      path: "0002",
      numchild: 1,
      children: [
        {
          id: 3,
          name_eng: "Mythology",
          name_ar: "Mythology",
          name_de: "Mythology",
          name_fr: "Mythology",
          description: "",
          depth: 2,
          path: "00020002",
          numchild: 0,
          children: [],
        },
      ],
    },
  ],
};

it("parses simple subject tree data into formatted hierarchy", () => {
  let result = parseTree(subjects, "Subject Areas");
  expect(result).toEqual(parsedSubjects);
});
