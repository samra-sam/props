interface ICardProps{
    heading : string,
    paragraph : string,
    button : string,
    color :  string
}
export default function Card(props : ICardProps){
    const {heading , paragraph , button , color} = props
    return(
        <div className={`${color} m-5 rounded`}>
      <div className="card-heading">
      <h1 className="text-white">{heading}</h1>
      </div>
      <div className="card-body text-orange-300">
      <p>{paragraph}</p>
      </div>
      <div className="card-footer text-gray-300 font-medium">
      <button>{button}</button>
      </div>
     </div>
    )
}