package com.gfashion.api;

import com.gfashion.converters.GfDesignerConverter;
import com.gfashion.data.repository.GfDesignerRepository;
import com.gfashion.domain.GfDesigner;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * REST controller for G-Fashion designer page
 */
@RestController
@RequestMapping(path = "/gfashion/v1", produces = {"application/json"})
public class GfashionDesignerResource {

    private GfDesignerRepository _designerRepo;
    private GfDesignerConverter _designerConverter;
    GfashionDesignerResource(GfDesignerRepository repo, GfDesignerConverter converter){
        this._designerRepo = repo;
        this._designerConverter = converter;
    }
    @GetMapping("/designer/getAll")
    public List<GfDesigner> getAllDesigners(){
        return this._designerConverter.toDesignersDto(_designerRepo.findAll());
    }
}
