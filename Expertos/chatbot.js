const directLineToken = '5MFXrEKKbYaNwQi0d01b3BRdZl7e5xjxy6x3we6YyF31gsOhm42EJQQJ99BFACHYHv6AArohAAABAZBS2F0t.BlqgX37QGCbM3SUaT7swhaJduWJvSJA20DewTbiDYkQlar7JgVkzJQQJ99BFACHYHv6AArohAAABAZBS2DYO';

const directLine = window.WebChat.createDirectLine({
  token: directLineToken
});

const store = window.WebChat.createStore({}, ({ dispatch }) => next => action => {
  if (action.type === 'DIRECT_LINE/CONNECT_FULFILLED') {
    dispatch({
      type: 'WEB_CHAT/SEND_EVENT',
      payload: {
        name: 'startConversation',
        value: { source: 'webchat' }
      }
    });
  }
  return next(action);
});

window.WebChat.renderWebChat(
  {
    directLine,
    store,
    userID: 'user',
    username: 'user',
    locale: 'es-ES',
    styleOptions: {
      bubbleMaxWidth: 380,
      bubblePadding: 10,
      bubbleTextSize: 10,
      sendBoxHeight: 40,
      sendBoxTextSize: 14,
      paddingRegular: 12,
      hideUploadButton: true,
      botAvatarImage: 'https://img.icons8.com/?size=512&id=35734&format=png',
      botAvatarInitials: '', // vacía para que no se superponga
      botAvatarBackgroundColor: 'transparent',
      botAvatarSize: 40
    }

  },
  document.getElementById('webchat')
);
