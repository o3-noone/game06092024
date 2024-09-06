import React, { useState, useEffect, useRef } from 'react';

const Main = () => {
  const [score, setScore] = useState(0);
  const [arr1, setArr1] = useState([]);
  const [arr2, setArr2] = useState([]);
  const [arr3, setArr3] = useState([]);
  const [arr4, setArr4] = useState([]);
  const [arr5, setArr5] = useState([]);
  const [arr6, setArr6] = useState([]);
  const [arr7, setArr7] = useState([]);
  const [arr8, setArr8] = useState([]);
  const [arr9, setArr9] = useState([]);
  const getWidth1 = useRef(null)
  const [itemWidth, setItemWidth] = useState(0)
  useEffect(() => {
    if (getWidth1.current) {
      const width = getWidth1.current.offsetWidth;
      console.log("Element kengligi:", width);
    }
  }, []);
  const items = [
    { id: 1, category: 1, color: "red" },
    { id: 2, category: 1, color: "red" },
    { id: 3, category: 1, color: "red" },
    { id: 4, category: 1, color: "red" },
    { id: 5, category: 1, color: "red" },
    { id: 6, category: 1, color: "red" },
    { id: 7, category: 1, color: "red" },
    { id: 8, category: 1, color: "red" },

    { id: 9, category: 2, color: "white" },
    { id: 10, category: 2, color: "white" },
    { id: 11, category: 2, color: "white" },
    { id: 12, category: 2, color: "white" },
    { id: 13, category: 2, color: "white" },
    { id: 14, category: 2, color: "white" },
    { id: 15, category: 2, color: "white" },
    { id: 16, category: 2, color: "white" },

    { id: 17, category: 3, color: "blue" },
    { id: 18, category: 3, color: "blue" },
    { id: 19, category: 3, color: "blue" },
    { id: 20, category: 3, color: "blue" },
    { id: 21, category: 3, color: "blue" },
    { id: 22, category: 3, color: "blue" },
    { id: 23, category: 3, color: "blue" },
    { id: 24, category: 3, color: "blue" },

    { id: 25, category: 4, color: "green" },
    { id: 26, category: 4, color: "green" },
    { id: 27, category: 4, color: "green" },
    { id: 28, category: 4, color: "green" },
    { id: 29, category: 4, color: "green" },
    { id: 30, category: 4, color: "green" },
    { id: 31, category: 4, color: "green" },
    { id: 32, category: 4, color: "green" },

    { id: 33, category: 5, color: "yellow" },
    { id: 34, category: 5, color: "yellow" },
    { id: 35, category: 5, color: "yellow" },
    { id: 36, category: 5, color: "yellow" },
    { id: 37, category: 5, color: "yellow" },
    { id: 38, category: 5, color: "yellow" },
    { id: 39, category: 5, color: "yellow" },
    { id: 40, category: 5, color: "yellow" },

    { id: 41, category: 6, color: "purple" },
    { id: 42, category: 6, color: "purple" },
    { id: 43, category: 6, color: "purple" },
    { id: 44, category: 6, color: "purple" },
    { id: 45, category: 6, color: "purple" },
    { id: 46, category: 6, color: "purple" },
    { id: 47, category: 6, color: "purple" },
    { id: 48, category: 6, color: "purple" },

    { id: 49, category: 7, color: "orange" },
    { id: 50, category: 7, color: "orange" },
    { id: 51, category: 7, color: "orange" },
    { id: 52, category: 7, color: "orange" },
    { id: 53, category: 7, color: "orange" },
    { id: 54, category: 7, color: "orange" },
    { id: 55, category: 7, color: "orange" },
    { id: 56, category: 7, color: "orange" },

    { id: 57, category: 8, color: "rgb(231, 73, 99)" },
    { id: 58, category: 8, color: "rgb(231, 73, 99)" },
    { id: 59, category: 8, color: "rgb(231, 73, 99)" },
    { id: 60, category: 8, color: "rgb(231, 73, 99)" },
    { id: 61, category: 8, color: "rgb(231, 73, 99)" },
    { id: 62, category: 8, color: "rgb(231, 73, 99)" },
    { id: 63, category: 8, color: "rgb(231, 73, 99)" },
    { id: 64, category: 8, color: "rgb(231, 73, 99)" },
  ];

  const randomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const shuffleArray = (array) => {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const distributeItems = (items) => {
    const categories = [...new Set(items.map(item => item.category))];
    const arrays = [arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8];

    arrays.forEach(arr => {
      const usedCategories = new Set();

      while (arr.length < categories.length) {
        const category = categories.find(cat => !usedCategories.has(cat));
        const itemsInCategory = items.filter(item => item.category === category);
        const item = randomElement(itemsInCategory);

        if (item) {
          arr.push(item);
          usedCategories.add(item.category);
          const index = items.indexOf(item);
          if (index > -1) items.splice(index, 1);
        }
      }
    });
    // localStorage.setItem("arr1", arrays[0])
    // localStorage.setItem("arr2", arrays[1])
    // localStorage.setItem("arr3", arrays[2])
    // localStorage.setItem("arr4", arrays[3])
    // localStorage.setItem("arr5", arrays[4])
    // localStorage.setItem("arr6", arrays[5])
    // localStorage.setItem("arr7", arrays[6])
    // localStorage.setItem("arr8", arrays[7])

    setArr1(shuffleArray(arrays[0]));
    setArr2(shuffleArray(arrays[1]));
    setArr3(shuffleArray(arrays[2]));
    setArr4(shuffleArray(arrays[3]));
    setArr5(shuffleArray(arrays[4]));
    setArr6(shuffleArray(arrays[5]));
    setArr7(shuffleArray(arrays[6]));
    setArr8(shuffleArray(arrays[7]));
  };

  useEffect(() => {
    distributeItems(items);
  }, []);
  const [changeId1, setChangeId1] = useState(0)
  const [changeId2, setChangeId2] = useState(0)
  const arrays = [arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9];
  const arrayChange = (id) => {
    if (changeId1) {
      setChangeId2(id)
    } else {
      setChangeId1(id)
    }
  }
  if (changeId1 && changeId2) {
    if (changeId1 !== changeId2) {
      if (arrays[changeId2 - 1].length < 8) {
        const setArrFunctions = [setArr1, setArr2, setArr3, setArr4, setArr5, setArr6, setArr7, setArr8, setArr9];

        const sourceArray = arrays[changeId1 - 1];
        const itemToMove = sourceArray[0];

        setArrFunctions[changeId1 - 1](prevArr => prevArr.slice(1));

        setArrFunctions[changeId2 - 1](prevArr => [itemToMove, ...prevArr]);
        setChangeId1("")
        setChangeId2("")
      }
    } else {
      setChangeId2("")
    }
  }


  return (
    <div className='main'>
      <div className="main__title">
        {/* Score: {score} */}
      </div>
      <div className="main__game">
        <div className="game__box">
          {arrays.map((arr, index) => (
            <div style={{ paddingTop: `${(8 * itemWidth) - (arr.length * itemWidth)}px`, borderBottom: `${changeId1 === index + 1 ? "2px solid yellow" : ""}` }}
              key={index} onClick={() => arrayChange(index + 1)} className='tree m0'>
              {arr.map(value => (
                <div key={value.id} ref={getWidth1} className='item' style={{ backgroundColor: value.color }}>
                </div>

              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
