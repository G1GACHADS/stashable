import styled from 'styled-components/native'

import Input from '../../../components/input'
import Label from '../../../components/label'

const ItemDetailContainer = styled.View`
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`

const ItemDetailInputWrapper = styled.View`
  min-width: 50%;
  margin-bottom: 10px;
  padding-right: 10px;
`

export const ItemForm = ({ form, setForm }) => {
  return (
    <>
      <Label>Item Name</Label>
      <Input
        value={form.name}
        placeholder="Perabotan Rumah Tangga"
        onChangeText={name => setForm({ ...form, name })}
      />
      <Label>Description</Label>
      <Input
        multiline
        numberOfLines={10}
        textAlignVertical="top"
        value={form.description}
        placeholder={`Barang berupa perabotan rumah tangga, yang meliputi :
- Sapu
- Gagang Sapu
- Kain Pel
- Kanebo`}
        onChangeText={description => setForm({ ...form, description })}
      />
      <Label>Item Details</Label>
      <ItemDetailContainer>
        <ItemDetailInputWrapper>
          <Input
            value={form.length}
            placeholder="Length (cm)"
            onChangeText={length => setForm({ ...form, length })}
            keyboardType="numeric"
          />
        </ItemDetailInputWrapper>
        <ItemDetailInputWrapper>
          <Input
            value={form.width}
            placeholder="Width (cm)"
            onChangeText={width => setForm({ ...form, width })}
            keyboardType="numeric"
          />
        </ItemDetailInputWrapper>
        <ItemDetailInputWrapper>
          <Input
            value={form.height}
            placeholder="Height (cm)"
            onChangeText={height => setForm({ ...form, height })}
            keyboardType="numeric"
          />
        </ItemDetailInputWrapper>
        <ItemDetailInputWrapper>
          <Input
            value={form.weight}
            placeholder="Weight (cm)"
            onChangeText={weight => setForm({ ...form, weight })}
            keyboardType="numeric"
          />
        </ItemDetailInputWrapper>
        <ItemDetailInputWrapper>
          <Input
            value={form.quantity}
            placeholder="Quantity (cm)"
            onChangeText={quantity => setForm({ ...form, quantity })}
            keyboardType="numeric"
          />
        </ItemDetailInputWrapper>
      </ItemDetailContainer>
    </>
  )
}

export default ItemForm
