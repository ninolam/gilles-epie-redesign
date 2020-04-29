import React from 'react';
import Presentation from '../Components/molecules/presentation/Presentation';
import Button from '../Components/atoms/buttons/Buttons';
import '../Components/molecules/presentation/Presentation.scss';

export default {
    title: 'Presentation'
}

export const Intro = (props) => {
    return (
        <Presentation>
            <div class="Heading__portraits">
                <div class="Heading__images">
                    <div class="Heading__image" style="background-image: url(&quot;https://www.westmountmag.ca/wp-content/uploads/2015/10/p_gilles-epie_5001.jpg&quot;);"></div>
                </div>
            </div>
        </Presentation>
    );
};