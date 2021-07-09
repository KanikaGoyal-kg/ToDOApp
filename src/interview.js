import React, { useEffect, useState } from 'react';

const Interview = () => {


    const [filter, setFiter] = useState();
    const [twoObj, setTwoObj] = useState();

    const arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4];

    const array1 = [
        { id: "1", name: "a" },
        { id: "2", name: "b" },
        { id: "3", name: "c" },
        { id: "4", name: "d" },
      ];
      const array2 = [
        { id: "2", name: "b" },
        { id: "3", name: "c" },
      ];

      const subjects = {
        makrs: {
          English: '10',
          math: '20'
        }      
      }

    
    useEffect(() => {
        const filterArray = arr.filter((value, index) => {return arr.indexOf(value) === index} )
               setFiter(filterArray);
        
        
          const filtered = array1.filter((item) => {
            return (array2.indexOf(item));
          });
          console.log(filtered)

          // return filtered;
        setTwoObj(filtered);

        
        
    },[])

    return (
        <>
        <div>
            {filter && filter.map((id) => {
                return (
                <h1>{id}</h1>
                )
            })}
        </div>
        <div>
          {twoObj && twoObj.map((a) => {
            return (
              <h1>{a}</h1>
            )
          })}
        </div>
        </>
    )
};

export default Interview;