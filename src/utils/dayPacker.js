import Picker from 'react-native-picker';

export default function showDaysPacker(title='请选择日期',defalut=1){
  return new Promise((resolve,reject)=>{
    let data = [];
    for(var i=1;i<30;i++){
        data.push(i);
    }
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