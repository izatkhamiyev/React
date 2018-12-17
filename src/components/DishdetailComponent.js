import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';

class DishDetail extends Component{
    
    constructor(props){
        super(props);
    }

    renderDish(dish){
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments(comments){
        return (
        <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className = "list-unstyled">
                {comments.map((comm) =>
                    <li key={comm.id}>
                        <p>{comm.comment}</p>
                        <p>--{comm.author}, {this.formatDate(comm.date)}</p>
                    </li>
                )}
            </ul>
        </div>
        );
    }
    render(){
        const dish = this.props.detail;
        if (dish != null)
            return(
                <div className="row">
                    {this.renderDish(dish)}
                    {this.renderComments(dish.comments)}
                </div> 
            );
        else
            return(
                <div></div>
            );
    }
    formatDate(date){
        return (
          date.slice(0,10)
        );
    }
}

export default DishDetail;