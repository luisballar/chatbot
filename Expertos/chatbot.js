        const directLineToken = '5MFXrEKKbYaNwQi0d01b3BRdZl7e5xjxy6x3we6YyF31gsOhm42EJQQJ99BFACHYHv6AArohAAABAZBS2F0t.BlqgX37QGCbM3SUaT7swhaJduWJvSJA20DewTbiDYkQlar7JgVkzJQQJ99BFACHYHv6AArohAAABAZBS2DYO';  // Reemplaza con tu token real
        const connectionString = 'https://defaulte7984cac25434f888f979524335e6b.c4.environment.api.powerplatform.com/copilotstudio/dataverse-backed/authenticated/bots/cr29b_tatooineMedicalCenter/conversations?api-version=2022-03-01-preview';  // Reemplaza con tu connection string si es necesario

        // Crear el objeto DirectLine usando el token
        const directLine = window.WebChat.createDirectLine({
            token: directLineToken
        });

        // Renderizar el WebChat en el div con id 'webchat'
        window.WebChat.renderWebChat({
            directLine: directLine,
            userID: 'user',  // Un identificador único para el usuario
            username: 'user',  // Nombre del usuario
            locale: 'es-ES'  // Idioma
        }, document.getElementById('webchat'));