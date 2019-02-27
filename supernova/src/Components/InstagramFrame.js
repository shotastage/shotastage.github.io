import React from 'react';
import { Row } from 'react-bootstrap';
import InstagramEmbed from 'react-instagram-embed';


export class InstagramFrame extends React.Component {

  render() {
    return (
        <Row>
            <InstagramEmbed
                url='https://instagr.am/p/BqwIyoRHjzc/'
                maxWidth={400}
                hideCaption={false}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
            />
            <InstagramEmbed
                url='https://instagr.am/p/Bg5Rlc6hZcU/'
                maxWidth={400}
                hideCaption={false}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
            />
        </Row>
    );
  }
}
