import "../css/MainContent.css";

export function Pagination(){
  return(
    <div>
    <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
    </div>
  )
}



export default function Maincontent() {
  const cardData = [
    {
      header: "SBI",
      title: "State Bank of India",
      text: "State Bank of India",
    },
    {
      header: "SBI",
      title: "State Bank of India",
      text: "State Bank of India",
    },
    {
      header: "SBI",
      title: "State Bank of India",
      text: "State Bank of India",
    },
    {
      header: "SBI",
      title: "State Bank of India",
      text: "State Bank of India",
    },
    {
      header: "SBI",
      title: "State Bank of India",
      text: "State Bank of India",
    },
    {
      header: "SBI",
      title: "State Bank of India",
      text: "State Bank of India",
    },
    {
      header: "SBI",
      title: "State Bank of India",
      text: "State Bank of India",
    },
    {
      header: "SBI",
      title: "State Bank of India",
      text: "State Bank of India",
    },
    {
      header: "SBI",
      title: "State Bank of India",
      text: "State Bank of India",
    },
    {
      header: "SBI",
      title: "State Bank of India",
      text: "State Bank of India",
    },
    {
      header: "SBI",
      title: "State Bank of India",
      text: "State Bank of India",
    },
    {
      header: "SBI",
      title: "State Bank of India",
      text: "State Bank of India",
    },
  ];

  const SearchBar = () => {
    return <p>Search Bar</p>;
  };

  return (
    <div className="main-content">
      <SearchBar />
     
      <div className="row">
        {cardData.map((card, index) => (
          <div className="col-3" key={index}>
            <div className="card  mb-3">
              <div className="card-header">{card.header}</div>
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination/>
    </div>
  );
}
