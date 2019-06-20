import React from "react"
import { Button } from "react-bootstrap"

export default function FullPage(props){

  return (
    <div>
      <br /><br />
      <h1 className="text-info">
        {props.rootData.title}
      </h1>
      <br /><br />
      <Button onClick={props.history.goBack}> Go Back </Button>
    </div>
  )
}
