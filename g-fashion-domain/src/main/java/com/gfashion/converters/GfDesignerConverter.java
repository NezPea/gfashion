package com.gfashion.converters;

import com.gfashion.data.GfDesignerEntity;
import com.gfashion.domain.GfDesigner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class GfDesignerConverter {
    public GfDesigner toDesignerDto(GfDesignerEntity entity){
        GfDesigner designer = new GfDesigner();
        designer.setId(entity.getId());
        designer.setName(entity.getName());
        designer.setPhotoUrl(entity.getPhotoUrl());
        designer.setStatus(entity.getStatus());
        return designer;
    }

    public List<GfDesigner> toDesignersDto(List<GfDesignerEntity> entities){
        List<GfDesigner> designers = new ArrayList<GfDesigner>();
        if (entities != null){
            for ( GfDesignerEntity entity: entities) {
                designers.add(toDesignerDto(entity));
            }
        }
        return designers;
    }
}
