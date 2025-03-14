import { useState } from "react";

type Link = {
  id: number;
  url: string;
  text: string;
};

const NavLinks: Link[] = [
  {
    id: 2323,
    url: "https://github.com/sajidur319370",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 5656,
    url: "https://github.com/sajidur319370",
    text: "Cumque incidunt et velit tempora soluta neque blanditiis nesciunt ullam, similique fuga.",
  },
  {
    id: 7878,
    url: "https://github.com/sajidur319370",
    text: "Tempora soluta neque blanditiis nesciunt ullam, similique fuga.",
  },
];

function Component() {
  const [name, setName] = useState<string>("Sajidur");
  const [num, setNum] = useState(111);
  const [list, setList] = useState<number[]>([1, 2, 3]);
  const [links, setLinks] = useState<Link[]>(NavLinks);
  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      <h3>{name}</h3>
      <h3>{num}</h3>
      <h3>{list}</h3>
      <ul>
        {links.map((link) => (
          <li>{link.text}</li>
        ))}
      </ul>

      <button
        className="btn btn-center"
        onClick={() => {
          setName("Rahman");
          setNum(599);
          setList([4, 5, 6]);
          setLinks([
            ...links,
            {
              id: 2323,
              url: "https://github.com/sajidur319370",
              text: "Lorem ipsum, dolor sit",
            },
          ]);
        }}
      >
        {" "}
        click
      </button>
    </div>
  );
}
export default Component;
