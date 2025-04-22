import { View, Text } from 'react-native'
import React from 'react'
import Carousel from "pinar";
import { StyleSheet, Image } from "react-native";

const styles = {
    carouselContainer: {
      height: 250, // total height of Carousel + space for dots
    },
    slide: {
      aligmnItems: "center",
      justifyContent: "center",
    },
}  
const Carouselcomp = () => {
  return (
            <View style={styles.carouselContainer}>
              <Carousel
                style={{ height: 200 }}
                autoplay
                autoplayTimeout={30000}
                loop
                showsPagination
                showsButtons={false}
                showsControls={false}
                paginationStyle={{ bottom: 10 }} // now relative to container, not screen
                paginationDotStyle={{ backgroundColor: "#1f2d3d" }}
                paginationActiveDotStyle={{ backgroundColor: "#1f2d3d" }}
              >
                <View style={styles.slide}>
                  <Image
                    source={require("../assets/carousel-2.png")}
                    style={{ width: "100%", height: 240 }}
                  />
                </View>
                <View style={styles.slide}>
                  <Image
                    source={require("../assets/carousel-2.png")}
                    style={{ width: "100%", height: 240 }}
                  />
                </View>
                <View style={styles.slide}>
                  <Image
                    source={require("../assets/carousel-2.png")}
                    style={{ width: "100%", height: 240 }}
                  />
                </View>
              </Carousel>
            </View>
    
  )
}

export default Carouselcomp