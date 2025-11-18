import { View, Text, FlatList, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { router } from "expo-router";
import { getRecordsByUser, getRecordsByUserCount, getRecordsTotalCountByUser } from "../../../../src/store/actions/RecordActions";
import { useDispatch, useSelector } from "react-redux";
import { selectRecords, selectUser } from "../../../../src/store/selectors";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import DataTable from "../../../../src/components/DataTable";
const Home = () => {
  const dispatch = useDispatch();
  const actualUser = useSelector(selectUser);
  
  const [userCounts, setUserCounts] = useState(null);
  const [totalCount, setTotalCount] = useState(null);
  const [records, setRecords] = useState(null);

  useEffect(() => {
    const requestCounter = async () => {
      const total = await dispatch(getRecordsTotalCountByUser(actualUser.id));
      const counts = await dispatch(getRecordsByUserCount(actualUser.id));      
      const records = await dispatch(getRecordsByUser(actualUser.id));
      setTotalCount(total);
      setUserCounts(counts);

      setRecords(records.data);
    }
       if (actualUser?.id) {
      requestCounter();
    }
    
  }, [actualUser, dispatch])

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{flex:1, backgroundColor:'#FFF'}}>

      <LinearGradient
      colors={[
        "rgba(188,30,250,1)",
        "rgba(149,28,235,1)",
        "rgba(75,41,242,1)",
        "rgba(26,46,219,1)",
        "rgba(30,111,250,1)",
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.card}>
        <View style={styles.info}>
          <Text style={styles.title}>Total de Cobros realizados</Text>
          <TouchableOpacity>
            <View style={styles.linkRow}>
              <Ionicons name="eye-outline" size={16} color="#fff" />
              <Text style={styles.link}>Ver todos</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.value}>{totalCount ?? 0}</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.info}>
          <Text style={styles.title}>Saldo</Text>
          <TouchableOpacity>
            <View style={styles.linkRow}>
              <MaterialCommunityIcons name="wallet-plus-outline" size={16} color="#fff" />
              <Text style={styles.link}>Recargar saldo</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.value}>125</Text>
      </View>

      {userCounts && (
        <View style={[styles.card, styles.tableCard]}>
          <Text style={styles.title}>Reporte de Registros por Canal</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableHeader}><Ionicons name="chatbox-outline" size={14} color="#fff" /><Text style={styles.headerText}>SMS</Text></View>
              <View style={styles.tableHeader}><Ionicons name="mail-outline" size={14} color="#fff" /><Text style={styles.headerText}>EMAIL</Text></View>
              <View style={styles.tableHeader}><Ionicons name="logo-whatsapp" size={14} color="#fff" /><Text style={styles.headerText}>WHATSAPP</Text></View>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.cell}>{userCounts.SMS}</Text>
              <Text style={styles.cell}>{userCounts.EMAIL}</Text>
              <Text style={styles.cell}>{userCounts.WHATSAPP}</Text>
            </View>
          </View>
        </View>
      )}
    </LinearGradient>
    <View style={{padding:20}}>
 <Text style={{ fontSize: 18, fontWeight: "700", marginBottom: 10 }}>
        COBROS ENVIADOS RECIENTEMENTE
      </Text>

      <DataTable data={records} />

    </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
   container: {
    flex: 1,
    padding: 20,
    gap: 15,
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.2)",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    minWidth: 280,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    backdropFilter: "blur(10px)", // no nativo, se ignora pero ayuda en web
  },
  info: { flex: 1 },
  title: { color: "#fff", fontWeight: "bold", fontSize: 16, marginBottom: 5 },
  value: { color: "#fff", fontWeight: "bold", fontSize: 30 },
  linkRow: { flexDirection: "row", alignItems: "center", gap: 5 },
  link: { color: "#fff", textDecorationLine: "underline", fontSize: 14 },
  tableCard: { flexDirection: "column", alignItems: "center" },
  table: {
    marginTop: 10,
    width: "100%",
    borderColor: "#fff",
    borderWidth: 1,
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tableHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  headerText: { color: "#fff", fontWeight: "bold", fontSize: 12, marginLeft: 5 },
  cell: {
    flex: 1,
    textAlign: "center",
    color: "#fff",
    borderWidth: 1,
    borderColor: "#fff",
    padding: 8,
    fontWeight: "bold",
    fontSize: 14,
  }
})

export default Home;
