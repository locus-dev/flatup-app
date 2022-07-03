import "./propertyList.css"

const PropertyList = () => {
  return (
    <div className="pList">
        <div className="pListItem">
            <img src="./flat01.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Flat</h1>
            </div>
        </div>
        <div className="pListItem">
            <img src="./flat02.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Flat</h1>
            </div>
        </div>
    </div>
  )
}

export default PropertyList