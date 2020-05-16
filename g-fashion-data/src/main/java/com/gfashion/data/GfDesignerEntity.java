package com.gfashion.data;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.naming.Name;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import static javax.persistence.GenerationType.IDENTITY;

@Data
@Entity
@Table(name = "GF_DESIGNER")
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GfDesignerEntity {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Integer id;

    @NotNull
    private String Name;

    @NotNull
    private String photoUrl;

    private String Status;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getPhotoUrl() {
        return photoUrl;
    }

    public void setPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
    }

    public String getStatus() {
        return Status;
    }

    public void setStatus(String status) {
        Status = status;
    }

    public enum DesignerStatus { RECOMMENDED, PENDING, DELETED, UNKNOWN};

    public String toString(DesignerStatus status){
        switch (status){
            case RECOMMENDED: return "Recommended";
            case PENDING: return "Pending";
            case DELETED: return "Deleted";
            default: return "Unknown";
        }
    }

}
