import Picker from 'react-native-picker';

export default function showBankPacker(title='请选择开户银行',defalut='中国银行'){
  return new Promise((resolve,reject)=>{
    let data = ['中国银行','中国建设银行'];
   
    Picker.init({
        pickerData: data,
        selectedValue: [defalut],
        pickerConfirmBtnText:'确定',
        pickerCancelBtnText:'取消',
        pickerConfirmBtnColor:[255,203,0,255],
        pickerCancelBtnColor:[100,100,100,255],
        pickerRowHeight:40,
        pickerBg:[250,250,250,255],
        pickerTitleText:title,
        onPickerConfirm: data => {
            resolve(data)
        },
        onPickerCancel: data => {
        },
        onPickerSelect: data => {
        }
    });
    Picker.show();
  })
}