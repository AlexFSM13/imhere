import { View, Text } from 'react-native'

export default function App () {
  return (
    <View style = {{
      flex: 1,
      backgroundColor: '#131016',
      padding: 24
    }}>
      <Text  style = {{
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48
      }}>
        Nome do Evento
      </Text>
      <Text style = {{
        color: '#6B6B6B',
        fontSize: 16
      }}>
        Segunda-feira, 11 de Setembro de 2023
      </Text>
    </View>
  )
}
