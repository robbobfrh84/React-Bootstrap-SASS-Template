import React from "react"
import Footer from "../../components/Footer/footer.js"

export default function Page2(props) {

  return (
    <div>

      <br /><br />
      <h1 className="text-info">
        {props.rootData.title}
      </h1>
      <br /><br />

      <Footer />
    </div>
  )
}
