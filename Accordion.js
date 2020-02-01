import React, {Component} from 'react'
import './Accordion.css'

const sections = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
]

class Accordion extends Component {
    constructor() {
        super()
        this.state = {
            display: null
        }
    }

    displayContent = (idx) => {
        this.setState({
            display: idx
        })
    }

    render() {
        return(
            sections.map((section, idx) => {
                return (
                    <li key={idx}>
                        <button onClick={() => this.displayContent(idx)}>{section.title}</button>
                        <p className={(idx === this.state.display) ? `view` : `close`}>{section.content}</p>
                    </li>   
                )
            })
        )
    }
}

export default Accordion