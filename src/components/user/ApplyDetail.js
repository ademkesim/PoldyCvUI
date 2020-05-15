import React from "react";
import TextInput from "../toolbox/TextInput";
import SelectInput from "../toolbox/SelectInput";

const ApplyDetail = ({ applies, apply, onSave, onChange}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{apply.applyId ? "Güncelle" : "Ekle"}</h2>
      
      <SelectInput
        name="departmentId"
        label="Departman"
        value={apply.departmentId || ""}
        defaultOption="Seçiniz"
        options={applies.map((apply) => ({
          value: apply.departmentId,
          text: apply.departmentId,
        }))}
        onChange={onChange}
      />
      <SelectInput
        name="titleId"
        label="Ünvan"
        value={apply.titleId || ""}
        defaultOption="Seçiniz"
        options={applies.map((apply) => ({
            value: apply.titleId,
            text: apply.titleId,
          }))}
        onChange={onChange}
      />
      <TextInput
        name="detail"
        label="detail"
        value={apply.title}
        onChange={onChange}
      />
      <button type="submit" className="btn btn-success">
        Kaydet
      </button>
    </form>
  );
};

export default ApplyDetail;
