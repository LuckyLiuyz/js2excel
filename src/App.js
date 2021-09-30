import "./styles.css";
import ExportJsonExcel from "js-export-excel";
export default function App() {
  const down = () => {
    var option = {};
    option.fileName = "excel";
    option.datas = [
      {
        sheetData: [
          { one: "一行一列", two: "一行二列" },
          { one: "二行一列", two: "二行二列" }
        ],
        sheetName: "sheet",
        sheetFilter: ["two", "one"],
        sheetHeader: ["第一列", "第二列"],
        columnWidths: [20, 20]
      },
      {
        sheetData: [
          { one: "一行一列", two: "一行二列" },
          { one: "二行一列", two: "二行二列" }
        ]
      }
    ];
    var toExcel = new ExportJsonExcel(option); //new
    toExcel.saveExcel(); //保存
  };

  return (
    <div className="App">
      <button onClick={down}>excel</button>
    </div>
  );
}
