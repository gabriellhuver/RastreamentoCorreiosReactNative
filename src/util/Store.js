import { AsyncStorage } from 'react-native';
exports.addRastreio = async (rastreio)=> {
    try {
        await AsyncStorage.setItem(`@CorreiosRastreamento:rastreios:${rastreio.codigo}`, JSON.stringify(rastreio.data))
    } catch (error) {
        console.log(error)
    }
},
exports.removeRastreio =  async (codigo) =>{
    try {
        await AsyncStorage.removeItem(`@CorreiosRastreamento:rastreios:${codigo}`)
    } catch (error) {
        console.log(error)
    }
},
exports.loadRastreios =  async () => {
    try {
        const keys = await AsyncStorage.getAllKeys();
        let rastreios = []
        for (let index = 0; index < keys.length; index++) {
            const key = keys[index];
            if (key.includes('@CorreiosRastreamento:rastreios:')) {
                try {
                    rastreios.push({ codigo: key.split(':')[2], data: JSON.parse(await AsyncStorage.getItem(key)) })
                } catch (error) {
                    await AsyncStorage.removeItem(key)
                }
            }
        }
        console.log(keys)
        console.log('Rastreios carregados ' + rastreios.length)
        return rastreios;
    } catch (error) {
        console.log(error)
    }
}