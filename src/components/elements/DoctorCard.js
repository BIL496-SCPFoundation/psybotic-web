import React from 'react';
import PropTypes from 'prop-types';



import '../../assets/css/doccard.css'


const propTypes = {
    user : PropTypes.object

}

const defaultProps = {
    user : null
}

const DoctorCard = ({
                         className,
                         ...props
                     }) => {




    return (
        <>
            <div className="doc-card">
                <div className="doc-avatar">
                    <img src="https://madalyonklinik.com/wp-content/uploads/2019/05/G%C3%BClseren-han%C4%B1m.jpg"/>
                </div>
                <div className="doc-title">
                    <h3>Dr. Gülseren
                        BUDAYICIOĞLU
                    </h3>
                    <h5>
                        Psikiyatri Uzmanı
                        Merkez Başkanı
                    </h5>
                </div>
                <div className="doc-description">
                    Tıp öğrenimi sırasında, önce TRT Ankara Radyosu’nda, daha sonra da TRT televizyonunda 5 yıl boyunca kadrolu spiker ve ..</div>
                <div className="doc-social">
                    <ul>
                        <li><i className="fab fa-facebook"/></li>
                        <li><i className="fab fa-twitter"/></li>
                        <li><i className="fab fa-github"/></li>
                        <li><i className="fab fa-dev"/></li>
                        <li><i className="fas fa-link"/></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

DoctorCard.propTypes = propTypes;
DoctorCard.defaultProps = defaultProps;

export default DoctorCard;
