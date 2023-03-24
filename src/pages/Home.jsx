import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Form from '../components/Form'
import HomePng from '../components/HomePng'
import '../App.css';


function Home() {
    return (
        <div style={{backgroundColor: '#e0e0e0', height: '100vh', width: '100vw' }}>
            <Container>
                <Row>
                    <div className='col-md-5 mt-5 col-sm-12'>
                        <Form />
                    </div>
                    <div className=' text-center col-md-7 col-sm-12'>
                        <div>
                            <HomePng />
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Home