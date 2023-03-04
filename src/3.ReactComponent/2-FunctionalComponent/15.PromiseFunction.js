import { useEffect, useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function getFruits(query) {
  const fruits = [
    "Apple",
    "Apricot",
    "Avocado 🥑",
    "Banana",
    "Bilberry",
    "Blackberry",
    "Blackcurrant",
    "Blueberry",
    "Boysenberry",
    "Currant",
    "Cherry",
    "Coconut",
    "Cranberry",
    "Cucumber",
    "Custard apple",
    "Damson",
    "Date",
    "Dragonfruit",
    "Durian",
    "Elderberry",
    "Feijoa",
    "Fig",
    "Gooseberry",
    "Grape",
    "Raisin",
    "Grapefruit",
    "Guava",
    "Honeyberry",
    "Huckleberry",
    "Jabuticaba",
    "Jackfruit",
    "Jambul",
    "Juniper berry",
    "Kiwifruit",
    "Kumquat",
    "Lemon",
    "Lime",
    "Loquat",
    "Longan",
    "Lychee",
    "Mango",
    "Mangosteen",
    "Marionberry",
    "Melon",
    "Cantaloupe",
    "Honeydew",
    "Watermelon",
    "Miracle fruit",
    "Mulberry",
    "Nectarine",
    "Nance",
    "Olive",
    "Orange",
    "Clementine",
    "Mandarine",
    "Tangerine",
    "Papaya",
    "Passionfruit",
    "Peach",
    "Pear",
    "Persimmon",
    "Plantain",
    "Plum",
    "Pineapple",
    "Pomegranate",
    "Pomelo",
    "Quince",
    "Raspberry",
    "Salmonberry",
    "Rambutan",
    "Redcurrant",
    "Salak",
    "Satsuma",
    "Soursop",
    "Star fruit",
    "Strawberry",
    "Tamarillo",
    "Tamarind",
    "Yuzu"
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        fruits.filter((fruit) =>
          fruit.toLowerCase().includes(query.toLowerCase())
        )
      );
    }, Math.random() * 1000);
  });
}
export default function PromiseFunction() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const codeString=`
import { useEffect, useState } from "react";

function getFruits(query) {
  const fruits = [
    "Apple",
    "Apricot",
    "Avocado 🥑",
    "Banana",
    "Bilberry",
    "Blackberry",
    "Blackcurrant",
    "Blueberry",
    "Boysenberry",
    "Currant",
    "Cherry",
    "Coconut",
    "Cranberry",
    "Cucumber",
    "Custard apple",
    "Damson",
    "Date",
    "Dragonfruit",
    "Durian",
    "Elderberry",
    "Feijoa",
    "Fig",
    "Gooseberry",
    "Grape",
    "Raisin",
    "Grapefruit",
    "Guava",
    "Honeyberry",
    "Huckleberry",
    "Jabuticaba",
    "Jackfruit",
    "Jambul",
    "Juniper berry",
    "Kiwifruit",
    "Kumquat",
    "Lemon",
    "Lime",
    "Loquat",
    "Longan",
    "Lychee",
    "Mango",
    "Mangosteen",
    "Marionberry",
    "Melon",
    "Cantaloupe",
    "Honeydew",
    "Watermelon",
    "Miracle fruit",
    "Mulberry",
    "Nectarine",
    "Nance",
    "Olive",
    "Orange",
    "Clementine",
    "Mandarine",
    "Tangerine",
    "Papaya",
    "Passionfruit",
    "Peach",
    "Pear",
    "Persimmon",
    "Plantain",
    "Plum",
    "Pineapple",
    "Pomegranate",
    "Pomelo",
    "Quince",
    "Raspberry",
    "Salmonberry",
    "Rambutan",
    "Redcurrant",
    "Salak",
    "Satsuma",
    "Soursop",
    "Star fruit",
    "Strawberry",
    "Tamarillo",
    "Tamarind",
    "Yuzu"
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        fruits.filter((fruit) =>
          fruit.toLowerCase().includes(query.toLowerCase())
        )
      );
    }, Math.random() * 1000);
  });
}

export default function PromiseFunction() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    async function test() {
      var result = await getFruits(search);
      setSearchResult(result);
    }
    test();
  }, [search]);
  return (
    <div className="App">
      <input onChange={(e) => setSearch(e.target.value)} />
      <div> Show suggestions here</div>
      <div>Result Fruits are:</div>
      <ol id="result">
        {searchResult !== null ? searchResult.map((val) => <li>{val}</li>) : ""}
      </ol>
    </div>
  );
}

  `
  const copyFunction=(buttonID, functionID)=>{
    var copyText = document.getElementById(functionID)
    navigator.clipboard.writeText(copyText.innerText);
    var buttonElement=document.getElementById(buttonID);
    buttonElement.innerHTML= '<i class="bi bi-check2"></i> Copied';
  }
  useEffect(() => {
    async function test() {
      var result = await getFruits(search);
      setSearchResult(result);
    }
    test();
  }, [search]);
  return (
    
    <div className="flex-body">
        <div className="flex-left-content">
            <div className="App">
              <input onChange={(e) => setSearch(e.target.value)} />
              <div> Show suggestions here</div>
              <div>Result Fruits are:</div>
              <ol id="result">
                {searchResult !== null ? searchResult.map((val) => <li>{val}</li>) : ""}
              </ol>
            </div>        
        </div>
        <div className="flex-right-content">
          <button className="copy-icon" id="promise"  onClick={()=>{copyFunction('promise','promise-code')}}><i className="bi bi-clipboard"></i> Copy</button>
          <SyntaxHighlighter language="javascript" style={atelierCaveDark} id="promise-code" >
              {codeString}
          </SyntaxHighlighter>
        </div>
    </div>
  );
}
