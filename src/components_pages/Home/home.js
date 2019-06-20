import React from "react"
import Footer from "../../components/Footer/footer.js"
import "./home.sass"

export default function Home(props) {

  return (
    <div className="home">

      <br /><br />
      <h1 className="text-info">
        {props.rootData.website_title}
      </h1>
      <br /><br />

      <div className="wheel-container bg-light">
        <div className="wheel-logo text-warning">⎈</div>
      </div>

      <Footer />

    </div>
  )

}
