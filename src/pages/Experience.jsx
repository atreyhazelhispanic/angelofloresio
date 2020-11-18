import React from 'react';
import Select from 'react-select';
import Nordstrom from '../components/experience/Nordstrom';
import BestBuy from '../components/experience/BestBuy';
import ACE from '../components/experience/ACE';
import ChinaHarbor from '../components/experience/ChinaHarbor';
import EQC from '../components/experience/EQC'
import FredMeyer from '../components/experience/FredMeyer';
import IntegrityLabs from '../components/experience/IntegrityLabs';
import PAX from '../components/experience/PAX';
import RobisonRemodeling from '../components/experience/RobisonRemodeling';
import Safeway from '../components/experience/Safeway';
import Simpson from '../components/experience/Simpson';
import SMU from '../components/education/SMU';
import UW from '../components/education/UW';
import OC from '../components/education/OC';
import GRCC from '../components/education/GRCC';

const experienceOptions = [
    { value: 'nordstrom', label: 'Nordstrom' },
    { value: 'bestbuy', label: 'Best Buy' },
    { value: 'robisonremodeling', label: 'Robison Remodeling' },
    { value: 'pax', label: 'PAX' },
    { value: 'integritylabs', label: 'Integrity Labs' },
    { value: 'safeway', label: 'Safeway' },
    { value: 'simpson', label: 'Simpson' },
    { value: 'chinaharbor', label: 'China Harbor' },
    { value: 'emeraldqueen', label: 'Emerald Queen Casino' },
    { value: 'fredmeyer', label: 'Fred Meyer' },
    { value: 'ace', label: 'ACE Hardware' },
];

const educationOptions = [
    { value: 'smu', label: 'Saint Martin\'s University' },
    { value: 'uw', label: 'University of Washington' },
    { value: 'oc', label: 'Olympic College' },
    { value: 'grcc', label: 'Green River' },
];

const customStyles = {
    menu: (provided) => ({
        ...provided,
        width: 200
    }),
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? 'orangered' : 'blue',
        padding: 0,
        width: 200
    }),
    control: () => ({
        // none of react-select's styles are passed to <Control />
        display: 'flex',
        width: 200,
        backgroundColor: 'white'
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return { ...provided, opacity, transition };
    }
};

class Experience extends React.Component {
    state = {
        experienceOption: null,
        educationOption: null,
        experienceComponent: null,
        educationComponent: null,
    };

    experienceChange = experienceOption => {
        this.setState({ experienceOption });
        this.displayExperience(experienceOption);
    };

    educationChange = educationOption => {
        this.setState({ educationOption });
        this.displayEducation(educationOption);
    };

    displayExperience = (experienceOption) => {
        switch (experienceOption.value) {
            case 'nordstrom':
                this.setState({experienceComponent: <Nordstrom/>});
                break;
            case 'bestbuy':
                this.setState({experienceComponent: <BestBuy/>});
                break;
            case 'robisonremodeling':
                this.setState({experienceComponent: <RobisonRemodeling/>});
                break;
            case 'pax':
                this.setState({experienceComponent: <PAX/>});
                break;
            case 'integritylabs':
                this.setState({experienceComponent: <IntegrityLabs/>});
                break;
            case 'safeway':
                this.setState({experienceComponent: <Safeway/>});
                break;
            case 'simpson':
                this.setState({experienceComponent: <Simpson/>});
                break;
            case 'chinaharbor':
                this.setState({experienceComponent: <ChinaHarbor/>});
                break;
            case 'emeraldqueen':
                this.setState({experienceComponent: <EQC/>});
                break;
            case 'fredmeyer':
                this.setState({experienceComponent: <FredMeyer/>});
                break;
            case 'ace':
                this.setState({experienceComponent: <ACE/>});
                break;
            default:
                console.log('default switch statement.');
        }
      console.log(experienceOption.value);
    };

    displayEducation = (educationOption) => {
        switch (educationOption.value) {
            case 'smu':
                this.setState({educationComponent: <SMU/>});
                break;
            case 'uw':
                this.setState({educationComponent: <UW/>});
                break;
            case 'oc':
                this.setState({educationComponent: <OC/>});
                break;
            case 'grcc':
                this.setState({educationComponent: <GRCC/>});
                break;
            default:
                console.log('default switch statement.');
        }
        console.log(educationOption.value);
    };

    render() {
        const { selectedOption } = this.state;

        return (
            <div>
                <Select
                    placeholder={'Company'}
                    styles={customStyles}
                    value={selectedOption}
                    onChange={this.experienceChange}
                    options={experienceOptions}
                />
                <br/>
                {this.state.experienceComponent}
                <Select
                    placeholder={'Institution'}
                    styles={customStyles}
                    value={selectedOption}
                    onChange={this.educationChange}
                    options={educationOptions}
                />
                <br/>
                {this.state.educationComponent}
            </div>
        );
    }
}

export default Experience