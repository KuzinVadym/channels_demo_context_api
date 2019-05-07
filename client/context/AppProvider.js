import React from 'react';
import PropTypes from 'prop-types';
import AppContext from './index';
import { getChannels } from './rest';


class AppProvider extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  }
  /* eslint-disable */
  state = {
    channels: [],
    favorites: () => this.state.channels.filter(channel => channel.selected),
    loadChannels: async () => {
      const channels = await getChannels();
      const filteredChannels = channels.map(channel => {
        const l_token = channel.qualities[0].logo_token || "";
        return {
          'id': channel.id,
          'title': channel.title,
          'logo_token': l_token,
          'selected': false
        }
      })
      this.setState({channels: filteredChannels});
    },
    togleChannel: (channel) => {
      const channelIndex = this.state.channels.indexOf(channel);
      const newChannels = [...this.state.channels];
      newChannels.splice(channelIndex, 1, Object.assign({}, channel, {selected: !channel.selected}));
      this.setState({channels: newChannels});
    }
  };
  /* eslint-enable */

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
