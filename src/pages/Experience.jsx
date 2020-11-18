import React from 'react';
import Select from 'react-select';

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
      console.log(experienceOption.value);
    };

    displayEducation = (educationOption) => {
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
                <Select
                    placeholder={'Institution'}
                    styles={customStyles}
                    value={selectedOption}
                    onChange={this.educationChange}
                    options={educationOptions}
                />
            </div>
        );
    }
}

export default Experience