const directLineToken = '5MFXrEKKbYaNwQi0d01b3BRdZl7e5xjxy6x3we6YyF31gsOhm42EJQQJ99BFACHYHv6AArohAAABAZBS2F0t.BlqgX37QGCbM3SUaT7swhaJduWJvSJA20DewTbiDYkQlar7JgVkzJQQJ99BFACHYHv6AArohAAABAZBS2DYO';

const directLine = window.WebChat.createDirectLine({
  token: directLineToken
});

const store = window.WebChat.createStore({}, ({ dispatch }) => next => action => {
  if (action.type === 'DIRECT_LINE/CONNECT_FULFILLED') {
    dispatch({
      type: 'WEB_CHAT/SEND_EVENT',
      payload: {
        name: 'startConversation', // Este es el nombre del evento que debes configurar en tu bot
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
      bubbleMaxWidth: 380,           // Un poco más ancho para que quepan listas
      bubblePadding: 10,             // Suficiente para que no se corten las viñetas
      bubbleTextSize: 14,
      sendBoxHeight: 40,
      sendBoxTextSize: 14,
      paddingRegular: 10
    }

  },
  document.getElementById('webchat')
);
