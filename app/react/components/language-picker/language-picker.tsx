import * as React from 'react';
import PlyIcon from 'playalong-components/components/Icon';

interface LanguagePickerProps {
  language: string;
}
interface LanguagePickerState {
  flag: string;
}

export default class LanguagePicker extends React.Component<LanguagePickerProps, LanguagePickerState> {
  constructor(props: LanguagePickerProps) {
    super(props);

    this.showLanguageModal = this.showLanguageModal.bind(this);
  }

  componentWillMount() {
    this.setState({
      flag: 'il',
    });
  }

  showLanguageModal() {
    console.log('TODO');
  }

  render() {
    console.log(this);
    return (
      <PlyIcon
        click={this.showLanguageModal}
        tooltip='Choose Language'
        flag={this.state.flag}
        size = '20'
      >
      </PlyIcon >
    );
  }
}
export const props = ['language'];

// function LanguagePicker(props: LanguagePickerProps) {
//   return (
//     <span style={styles}>
//       <Icon
//         tooltip={props.isFavorite ? REMOVE_MESSAGE : ADD_MESSAGE}
//         icon={props.isFavorite ? 'heart' : 'heart-o'}
//         click={() => props.click(props.isFavorite)}
//
//       />
//     </span>
//   );
// }
// export const props = ['isFavorite', 'click'];
// export default FavoriteBtn;
//
// function plyLanguagePickerDirective() {
//   return {
//     template: `
//     `,
//     restrict: 'E',
//     controller: 'PlylanguagepickerCtrl',
//     controllerAs: 'vm',
//     bindToController: true,
//   };
// }
//
// export default plyLanguagePickerDirective;
