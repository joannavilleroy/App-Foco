import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Linking, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function OrdersScreen() {
  const [orders, setOrders] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [status, setStatus] = useState('Pedido não registrado');

  const phoneNumber = '551141541145';

  const items = [
    { id: '1', description: 'Camiseta Branca', unitPrice: 25.50 },
    { id: '2', description: 'Camiseta Colorida', unitPrice: 30.0 },
    { id: '3', description: 'Polo personalizada', unitPrice: 59.90 },
    { id: '4', description: 'Jaleco de medicina', unitPrice: 80.0 },
    { id: '5', description: 'Logo bordado no peito', unitPrice: 14.99 },
  ];

  const addOrder = () => {
    if (quantity && selectedItem) {
      const item = items.find(i => i.id === selectedItem);
      const subtotal = parseFloat(quantity) * item.unitPrice;
      const newOrder = { 
        id: new Date().toISOString(),
        quantity, 
        description: item.description, 
        unitPrice: item.unitPrice, 
        subtotal 
      };
      setOrders([...orders, newOrder]);
      setQuantity('');
      setSelectedItem('');
    }
  };

  const registerOrder = () => {
    if (orders.length > 0) {
      setStatus('Aguardando aprovação');
    }
  };

  const calculateTotal = () => {
    return orders.reduce((total, order) => total + order.subtotal, 0).toFixed(2);
  };

  const openWhatsApp = () => {
    const message = 'Olá, gostaria de saber mais sobre o meu pedido.';
    const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    Linking.openURL(url).catch(() => {
      alert('Não foi possível abrir o WhatsApp. Verifique se o aplicativo está instalado.');
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Novo Pedido</Text>

      <Picker
        selectedValue={selectedItem}
        onValueChange={(itemValue) => setSelectedItem(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Selecione um item" value="" />
        {items.map(item => (
          <Picker.Item key={item.id} label={`${item.description} - R$ ${item.unitPrice.toFixed(2)}`} value={item.id} />
        ))}
      </Picker>

      <TextInput 
        style={styles.input} 
        placeholder="Quantidade" 
        placeholderTextColor="#ccc" 
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
      />
      
      <TouchableOpacity style={styles.addButton} onPress={addOrder}>
        <Text style={styles.addButtonText}>Adicionar Item</Text>
      </TouchableOpacity>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.orderItem}>
            <Text style={styles.itemText}>Qtd: {item.quantity}</Text>
            <Text style={styles.itemText}>Desc: {item.description}</Text>
            <Text style={styles.itemText}>Preço: R$ {item.unitPrice.toFixed(2)}</Text>
            <Text style={styles.itemText}>Subtotal: R$ {item.subtotal.toFixed(2)}</Text>
          </View>
        )}
      />

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: R$ {calculateTotal()}</Text>
      </View>

      <TouchableOpacity style={styles.registerButton} onPress={registerOrder}>
        <Text style={styles.registerButtonText}>Registrar Pedido</Text>
      </TouchableOpacity>

      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>Status: {status}</Text>
      </View>

      {/* Botão Flutuante para WhatsApp */}
      <TouchableOpacity style={styles.whatsappButton} onPress={openWhatsApp}>
        <Image 
          source={require('./images/icon-whatsapp.png')} 
          style={styles.whatsappIcon} 
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#545454',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 40,
  },
  picker: {
    backgroundColor: '#666',
    color: 'white',
    borderRadius: 5,
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#666',
    color: 'white',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  addButton: {
    backgroundColor: '#f9957f',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
  },
  orderItem: {
    backgroundColor: '#666',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  itemText: {
    color: 'white',
    fontSize: 14,
  },
  totalContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 5,
  },
  totalText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  registerButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  registerButtonText: {
    color: 'white',
    fontSize: 16,
  },
  statusContainer: {
    marginTop: 20,
    backgroundColor: '#444',
    padding: 10,
    borderRadius: 5,
  },
  statusText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  whatsappButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#25D366',
    borderRadius: 50,
    padding: 15,
    elevation: 5,
  },
  whatsappIcon: {
    width: 30,
    height: 30,
  },
});
