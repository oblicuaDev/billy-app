import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  FlatList,
  StyleSheet,
} from "react-native";

export default function DataTable({ data }) {
  const [search, setSearch] = useState("");

  // Transformar la estructura anidada en un formato plano
  const formattedData = useMemo(() => {
    if (!Array.isArray(data)) return [];

    return data.map((item) => {
      const attr = item.attributes || {};
      const invoice = attr.invoice?.data?.attributes || {};
      const etapa = invoice.etapa?.data?.attributes || {};
      const client = invoice.client?.data?.attributes || {};
      const channel = attr.channel?.data?.attributes || {};

      return {
        id: item.id,
        deudor: client.name || "—",
        monto: `$${invoice.amount?.toLocaleString("es-CO") || "0"}`,
        etapa: etapa.name || "—",
        factura: invoice.number || "—",
        canal: channel.name || "—",
        fecha: new Date(attr.date).toLocaleDateString("es-CO", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      };
    });
  }, [data]);

  // Filtrar por texto
  const filteredData = useMemo(() => {
    return formattedData.filter((row) =>
      Object.values(row).some((v) =>
        String(v).toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, formattedData]);

  const renderHeader = () => (
    <View style={styles.headerRow}>
      {["Deudor", "Monto", "Etapa", "Factura", "Último canal", "Fecha"].map(
        (label, i) => (
          <Text key={i} style={[styles.cell, styles.headerCell]}>
            {label}
          </Text>
        )
      )}
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.deudor}</Text>
      <Text style={styles.cell}>{item.monto}</Text>
      <Text style={styles.cell}>{item.etapa}</Text>
      <Text style={styles.cell}>{item.factura}</Text>
      <Text style={styles.cell}>{item.canal}</Text>
      <Text style={styles.cell}>{item.fecha}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Filtro */}
      <TextInput
        style={styles.input}
        placeholder="Buscar..."
        placeholderTextColor="#999"
        value={search}
        onChangeText={setSearch}
      />

      {/* Tabla */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.table}>
          {renderHeader()}
          <FlatList
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 8,
    margin: 10,
    backgroundColor: "#f6f1ff",
    color: "#000",
  },
  table: {
    borderRadius: 20,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  headerRow: {
    flexDirection: "row",
    backgroundColor: "#E6D3FF",
  },
  headerCell: {
    fontWeight: "600",
    color: "#1E1E1E",
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  cell: {
    flex: 1,
    padding: 10,
    fontSize: 13,
    color: "#1E1E1E",
  },
});
