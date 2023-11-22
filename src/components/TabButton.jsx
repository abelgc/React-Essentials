export default function TabButton({ children, onSelectTab, isSelected }) {

    return (
      <li>
        <button className={isSelected ? "active": undefined} onClick={onSelectTab}>{children}</button>
      </li>
    );
  }

// export default function TabButton(props){

//     function handleClick(){
//         console.log("click")
//     }
//     return (
//         <li>
//             <button onClick={handleClick}>{props.children}</button>
//         </li>
//     )
// }

/*
// using children with object composition
export default function TabButton2(children){

    return (
        <li><button>children</button></li>
    )
}

// using Attributes
export default function TabButton3(label){

    return (
        <li><button>{label}</button></li>
    )
}*/