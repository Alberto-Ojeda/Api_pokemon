import React from "react";

const Pagination = (props) => {
    const { onLeftClick, onRightClick, page, totalPages} = props;
    return(
        <div className="pagination">
            <button  style={{color:"white",borderColor:"white", height:"50px", width:"120px", borderRadius:"8%", backgroundColor:"rgb(96, 85, 112)"}}  onClick={onLeftClick}>
            <div>  ATRAS</div>
            </button>

            <div style={{color:"rgb(96, 85, 112)", fontSize:"28px", padding:"10px"}}>{page}  de {totalPages}</div>

            <button  style={{color:"white",borderColor:"white", height:"50px", width:"120px", borderRadius:"8%", backgroundColor:"rgb(96, 85, 112)"}}  onClick={onRightClick}>
                 <div>ADELANTE</div>
            </button>
        </div>

    )
}
export default Pagination;