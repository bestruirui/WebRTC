import React, { Component } from 'react';
import { Input, Button, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./Home.css"

class Home extends Component {
  	constructor (props) {
		super(props)
		this.state = {
			url: ''
		}
	}

	handleChange = (e) => this.setState({ url: e.target.value })

	join = () => {
		if (this.state.url !== "") {
			var url = this.state.url.split("/")
			window.location.href = `/${url[url.length-1]}`
		} else {
			var url = Math.random().toString(36).substring(2, 7)
			window.location.href = `/${url}`
		}
	}

	render() {
		return (
			<React.Fragment>
  
				<div className="container-title">
					<h1 style={{ fontSize: "45px" }}>W.R.M</h1>
					<h1 className="container-title-content" style={{ fontWeight: "200" }}>一个运行在浏览器的视频会议</h1>
				</div>
				<div className="join-container">
					<p className="join-name" >加入一个会议</p>
					<Input className="join-container-url" placeholder="URL" onChange={e => this.handleChange(e)} />
					<Button className="join-container-bottom" variant="contained" color="primary" onClick={this.join} style={{ margin: "20px" }}>加入</Button>
				</div>
			</React.Fragment>
		)
	}
}

export default Home;