import React,{ useState }  from "react";


const ReadMore = ({text,maxLength}) =>{
    const [isExpended,setIsExpended] = useState(false);

    const toggleReadMore = () =>{
        setIsExpended(!isExpended)
    }

    return (
    <>
        <p>
        {isExpended ? text : `${text.slice(0, maxLength)}...`}
            {!isExpended && (
                <button onClick={toggleReadMore} className="fo-read">
                    ReadMore
                </button>
            )

            }
            {isExpended && (
                <button onClick={toggleReadMore} className="fo-read">
                    ReadLess
                </button>
            )

            }
        </p>
    </>
        )
}
export default ReadMore
