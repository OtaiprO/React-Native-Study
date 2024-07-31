import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  FlatList,
  SectionList,
} from "react-native";
import pokemonList from "./data.json";
import groupedPokemonList from "./grouped-data.json";

export default function App() {
  return (
    <SafeAreaViewView style={styles.container}>
      {/* <ScrollView style={styles.sctrollView}>
        {pokemonList.map((pokemon) => {
          return (
            <View style={styles.card} key={pokemon.id}>
              <Text style={styles.cardText}>{pokemon.type}</Text>
              <Text style={styles.cardText}>{pokemon.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}
      <View style={styles.sctrollView}>
        {/* <FlatList
          data={pokemonList}
          renderItem={({ item }) => {
            return (
              <View style={styles.card} key={item.id}>
                <Text style={styles.cardText}>{item.type}</Text>
                <Text style={styles.cardText}>{item.name}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={<Text style={{height:16}}> Between list elements</Text>}
          ListHeaderComponent={<Text>This is the Header of the list</Text>}
          ListFooterComponent={<Text>This is the Footer of the list</Text>}
        /> */}
        \
        <SectionList
          sections={groupedPokemonList}
          renderItem={({ item }) => {
            return (
              <View>
                <Text>{item}</Text>
              </View>
            );
          }}
          renderSectionHeader={({ section }) => <Text>{section.type}</Text>}
          ItemSeparatorComponent={
            <Text style={{ height: 16 }}> Between list elements</Text>
          }
          SectionSeparatorComponent={
            <Text style={{ height: 16 }}> Between list Sections</Text>
          }
        ></SectionList>
      </View>
    </SafeAreaViewView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  sctrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
  },
  cardText: {
    fontSize: 30,
  },
});
