import React from "react";
import image from '../../number1.png'
import {Button,Card,CardGroup,CardImg,CardBody,CardTitle,CardSubtitle,CardText} from 'reactstrap'
import {Link} from 'react-router-dom'

function MainPage(){
    return(
        <CardGroup>
      <Card>
        <CardImg
          alt="Card image cap"
          src={image}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">
            Stream Number One
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            High Quality, High Delay
          </CardSubtitle>
          <CardText>
            Stream with Highest Bitrate.
          </CardText>
          <Link to="/streamOne">
          <Button>
          Go to Stream
          </Button>
          </Link>
        </CardBody>
      </Card>
      <Card>
        <CardImg
          alt="Card image cap"
          src={image}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">
            Stream 2
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            Medium Quality, Medium Delay
          </CardSubtitle>
          <CardText>
            Stream with Medium Bitrate
          </CardText>
          <Link to='/streamTwo'>
          <Button>
            Go to Stream
          </Button>
          </Link>
        </CardBody>
      </Card>
      <Card>
        <CardImg
          alt="Card image cap"
          src={image}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">
            Stream 3
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            Lowest Quality, Lowest Delay
          </CardSubtitle>
          <CardText>
            Stream with low bitrate
          </CardText>
          <Link to='/streamThree'>
          <Button>
            Go to Stream
          </Button>
          </Link>
        </CardBody>
      </Card>
    </CardGroup>

    )
}

export default MainPage;