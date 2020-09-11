import React, {Component} from 'react';
import {Tabs ,Tab ,Grid, Cell, Card ,CardTitle,CardText,CardActions,Button,CardMenu,IconButton} from 'react-mdl';

class Project extends Component {
    constructor(props){
        super(props);
        this.state={ activeTab: 0};
    }

    toggleCategories(){
        if(this.state.activeTab===0){
            return(
                <div className="project-grid">
                    {/* Project 1*/}
                <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                    <CardTitle style={{color:'#fff',height:'176px',background:'url(https://i2.wp.com/www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo.jpg?resize=825%2C510&ssl=1) center / cover'}}>React Project #1</CardTitle>
                    <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                {/* Project 2*/}
                <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                    <CardTitle style={{color:'#fff',height:'176px',background:'url(https://i2.wp.com/www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo.jpg?resize=825%2C510&ssl=1) center / cover'}}>React Project #1</CardTitle>
                    <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                {/* Project 3*/}
                <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                    <CardTitle style={{color:'#fff',height:'176px',background:'url(https://i2.wp.com/www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo.jpg?resize=825%2C510&ssl=1) center / cover'}}>React Project #1</CardTitle>
                    <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                </div>

                

            )
    }else if(this.state.activeTab===1){
        return(
            <div><h1>This is Angular </h1>

            </div>
        )
    }
    else if(this.state.activeTab===2){
        return(
            <div><h1>This is VueJS </h1>

            </div>
        )
    }
    else if(this.state.activeTab===3){
        return(
            <div><h1>This is MongoDB </h1>

            </div>
        )
    }
}

    render() {
        return(
         <div className="category-tabs">
             <Tabs activeTab={this.state.activeTab} onChange={(tableId)=> this.setState({activeTab: tableId })} ripple>
                 <Tab>React</Tab>
                 <Tab>Angular</Tab>
                 <Tab>VueJS</Tab>
                 <Tab>MongoDB</Tab>
             </Tabs>

                 <Grid>
                     <Cell col={12}>
                         <div className="content">{this.toggleCategories()}</div>
                     </Cell>
                 </Grid>

         </div>
        )
    }
}

export default Project;