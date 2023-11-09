
import React from 'react';
import Breadcrumb from '../common/breadcrumbs/breadcrumb';
import ChoseAreaHomeOne from '../homes/home/ChoseAreaHomeOne';
import PriceArea from './PriceArea';
import CoreFeatures from './CoreFeatures';
import TestimonailHomeOne from '../homes/home/TestimonailHomeOne';
import FooterOne from '../layout/footers/FooterOne';
import AboutUsArea from '../about/AboutUsArea';
import AboutUsTwo from '../about/AboutUsTwo';
import ServicesHomeOne from '../homes/home/ServicesHomeOne';
import SubscriptinHomeThree from '../homes/home-3/SubscriptinHomeThree';
import HeaderOne from '../layout/headers/header';
import Punchline from '../homes/home/Punchline';
import FollowUp from '../../components/homes/home/FollowUp'
import Try from './Try'

const Hosting = () => {
    return (
        <>
            <HeaderOne />
            <main>
                <Breadcrumb  top_title="Data Importer" title="Onboarding Solutions" />
                <Punchline line1="Fix Your Customer Onboarding" line2="" />
                <AboutUsArea />
                <ServicesHomeOne />
                <Try />
                <SubscriptinHomeThree />
                <AboutUsTwo />
                {/* <PriceArea /> */}
                {/* <CoreFeatures /> */}
                {/* <TestimonailHomeOne style={true} /> */}
            </main>
            <FooterOne />
        </>
    );
};

export default Hosting;