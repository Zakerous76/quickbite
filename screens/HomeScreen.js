import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import {useNavigation} from "@react-navigation/native"
import * as solidIcons from "react-native-heroicons/solid"
import * as outIcons from "react-native-heroicons/outline"
import colors from '../config/colors'
import dimensions from '../config/dimensions'
import Categories from '../components/categories'

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect (()=>{
    navigation.setOptions({
      headerShown: false,
    })
  }, [])
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>    
      {/* Main View */}
      <View style={styles.mainView}>

        {/* UpperBar */}
        <View style={styles.upperBar}>
          
          {/* Header */}
          <View style={styles.header}>
            <View  style={{flex: 1, flexDirection: 'row'}}>
              <solidIcons.MapIcon size={45} color={colors.primary} style={{marginRight: 5}}/>
              <View style={{marginTop: dimensions.mary-5}}>
                <Text style={{fontWeight: 'bold', fontSize: 10, color: colors.font2}}>Deliver Now!</Text>
                <Text style={{fontWeight: 'bold', fontSize: 20, color: colors.font1}}>
                  Current Location
                  <outIcons.ChevronDownIcon size={20}/>
                </Text>
              </View>
            </View>
            <outIcons.UserIcon size={35} color={colors.primary} style={{marginTop: dimensions.mary-5}}></outIcons.UserIcon>
          </View>
        
          {/* Search */}
          <View style={styles.SearchBar}>
            <View style={styles.searchBox}>
              <outIcons.MagnifyingGlassIcon color={colors.darkGray}/>
              <TextInput placeholder='Enter a food item here' style={{}}/>
            </View>
            <solidIcons.AdjustmentsVerticalIcon color={colors.primary} style={{marginHorizontal:5, marginTop: dimensions.mary-5}}/>
          </View>
        </View>

        {/* Content View */}
        <ScrollView style={styles.contentView}>
          {/* Catergories */}
          <Categories/>
          {/*  Featured Row*/}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles= StyleSheet.create ({
  mainView: {
    flex: 1, 
    paddingHorizontal: dimensions.padx, 
    borderWidth:dimensions.borWidth, 
    borderColor:"orange"
  },
  header:{
    width: "100%",
    flex:2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  upperBar: {
    flex: .13, 
    backgroundColor: "white",  
    borderWidth:dimensions.borWidth, 
    borderColor:"pink", 
    paddingTop: dimensions.pady,

  },
  SearchBar:{
    flex: 1.2, 
    flexDirection: 'row',
    width: "100%",
    marginBottom: dimensions.mary-5,
  },
  contentView: {
    borderWidth: dimensions.borWidth,
    flex:.87, 
    borderColor: "red", 
    marginHorizontal: -dimensions.marx, 
    backgroundColor: colors.gray,
  },
  searchBox: {
    borderWidth: dimensions.borWidth, 
    flexDirection: 'row', 
    alignItems: "center", 
    flex:1, 
    backgroundColor: colors.gray, 
    padding: 3,}

  
})